import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Original parametric ribbon surface, rendered as real-time 3D geometry.
function ribbonGeometry(radius,width,phase){
 const positions=[],indices=[],steps=224,sides=12;
 for(let i=0;i<=steps;i++){
  const u=i/steps*Math.PI*2,twist=Math.sin(u+phase)*.8+.22,r=radius+Math.sin(u*3+phase)*.12;
  for(let j=0;j<=sides;j++){
   const v=j/sides*Math.PI*2;
   const a=Math.sign(Math.cos(v))*Math.pow(Math.abs(Math.cos(v)),.55)*width;
   const b=Math.sign(Math.sin(v))*Math.pow(Math.abs(Math.sin(v)),.55)*.058;
   const radial=a*Math.cos(twist)-b*Math.sin(twist),depth=a*Math.sin(twist)+b*Math.cos(twist);
   positions.push((r+radial)*Math.cos(u),(r+radial)*Math.sin(u),Math.sin(u*2+phase)*.23+depth);
   if(i<steps&&j<sides){const k=i*(sides+1)+j;indices.push(k,k+sides+1,k+1,k+1,k+sides+1,k+sides+2);}
  }
 }
 const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();return geometry;
}
const smooth=(a,b,v)=>{const t=THREE.MathUtils.clamp((v-a)/(b-a),0,1);return t*t*(3-2*t);};
export default function Sculpture({progress,motion,onState}){
 const host=useRef(null),motionRef=useRef(motion);
 useEffect(()=>{motionRef.current=motion;},[motion]);
 useEffect(()=>{
  let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}catch{onState('failed');return;}
  const el=host.current;renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.08;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;el.appendChild(renderer.domElement);
  const scene=new THREE.Scene(),lightBg=new THREE.Color('#e8e2da'),darkBg=new THREE.Color('#2c1921');scene.background=lightBg.clone();scene.fog=new THREE.Fog(lightBg,16,35);
  const camera=new THREE.PerspectiveCamera(38,1,.1,80),pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.04);scene.environment=env.texture;room.dispose();
  const group=new THREE.Group();scene.add(group);
  const colors=['#8a1538','#d8cbb7','#a8a7a7','#7d1032','#f4e7d1','#b7aaaa'];
  const meshes=colors.map((color,i)=>{const geometry=ribbonGeometry(1.7+i*.10,i%3===0?.35:.24,i*.53);const material=new THREE.MeshPhysicalMaterial({color,metalness:i%3===2?.94:i%3===0?.48:.15,roughness:i%3===2?.23:.29,clearcoat:.8,clearcoatRoughness:.18,side:THREE.DoubleSide,envMapIntensity:1.3});const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);return mesh;});
  const floorMaterial=new THREE.MeshStandardMaterial({color:lightBg,roughness:.92,metalness:.04});const floor=new THREE.Mesh(new THREE.PlaneGeometry(100,100),floorMaterial);floor.rotation.x=-Math.PI/2;floor.position.y=-2.65;floor.receiveShadow=true;scene.add(floor);
  const key=new THREE.DirectionalLight('#fff4e6',3.2);key.position.set(-3,7,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);Object.assign(key.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:.5,far:20});key.shadow.bias=-.001;key.shadow.normalBias=.03;scene.add(key);
  const rim=new THREE.DirectionalLight('#ffffff',2.8);rim.position.set(4,2,-5);scene.add(rim);scene.add(new THREE.HemisphereLight('#fff8ed','#77616c',2.1));
  let mobile=false,resizeVersion=0;const resize=()=>{const w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;mobile=w<680;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false);resizeVersion++;};const observer=new ResizeObserver(resize);observer.observe(el);resize();
  const pointer=new THREE.Vector2();const move=e=>{const b=el.getBoundingClientRect();pointer.set((e.clientX-b.left)/b.width-.5,(e.clientY-b.top)/b.height-.5);};const reset=()=>pointer.set(0,0);el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);
  let visible=true,frame=0,p=progress.current,clock=0,last=0,prevSignature='';const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;});intersection.observe(el);
  const contextLost=e=>{e.preventDefault();onState('failed');};renderer.domElement.addEventListener('webglcontextlost',contextLost);
  const render=time=>{
   frame=requestAnimationFrame(render);const dt=Math.min(.04,(time-last)/1000||0);last=time;if(!visible||document.hidden)return;
   const moving=motionRef.current,target=progress.current;p=moving?THREE.MathUtils.damp(p,target,8,dt):target;if(moving)clock+=dt;
   const signature=`${p.toFixed(4)}-${moving}-${resizeVersion}`;if(!moving&&signature===prevSignature)return;prevSignature=signature;
   const used=moving?p:p<.29?0:p<.72?.47:.94,expand=smooth(.25,.94,used),dark=smooth(.20,.40,used)*(1-smooth(.70,.94,used));const bg=lightBg.clone().lerp(darkBg,dark);scene.background.copy(bg);scene.fog.color.copy(bg);floorMaterial.color.copy(bg);
   meshes.forEach((mesh,i)=>{const theta=i*Math.PI/3;mesh.rotation.set(.30+Math.sin(theta)*.92*(1-expand)+expand*.15,theta*.50*(1-expand)+expand*.3,theta*.30+expand*(theta*.3));mesh.position.set(Math.cos(theta)*expand*1.05,Math.sin(theta)*expand*.72,(i-2.5)*expand*.36);});
   group.rotation.set(.05+(moving?pointer.y*.12:0),used*1.5+(moving?pointer.x*.22+Math.sin(clock*.19)*.08:0),-.18+used*.5);group.position.set(mobile?0:1.1,mobile?1.5:.10,0);group.scale.setScalar(mobile?.62:1);
   const zoom=Math.sin(used*Math.PI)*1.35;camera.position.set(Math.sin(used*Math.PI)*.7,.65+Math.sin(used*Math.PI)*.7,(mobile?10.8:8.4)-zoom);camera.lookAt(mobile?0:.30,mobile?.3:0,0);renderer.render(scene,camera);
  };frame=requestAnimationFrame(render);onState('ready');
  return()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset);renderer.domElement.removeEventListener('webglcontextlost',contextLost);meshes.forEach(m=>{m.geometry.dispose();m.material.dispose();});floor.geometry.dispose();floor.material.dispose();env.dispose();pmrem.dispose();renderer.dispose();renderer.domElement.remove();};
 },[progress,onState]);
 return <div ref={host} className="sculpture"/>;
}
