'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import { useGraph, useLoader } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { FBXLoader } from 'three-stdlib';
import { Group, SkinnedMesh } from 'three';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef<Group>(null);

  // --- Load base model
  const { scene } = useGLTF('/models/animations/developer.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  // --- Load ALL animations in ONE loader call (critical fix)
  const [idleFBX, saluteFBX, clappingFBX, victoryFBX] = useLoader(FBXLoader, [
    '/models/animations/idle.fbx',
    '/models/animations/salute.fbx',
    '/models/animations/clapping.fbx',
    '/models/animations/victory.fbx',
  ]);

  const animations = useMemo(() => {
    const anims = [
      idleFBX.animations[0],
      saluteFBX.animations[0],
      clappingFBX.animations[0],
      victoryFBX.animations[0],
    ];
    anims[0].name = 'idle';
    anims[1].name = 'salute';
    anims[2].name = 'clapping';
    anims[3].name = 'victory';
    return anims;
  }, [idleFBX, saluteFBX, clappingFBX, victoryFBX]);

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || !actions[animationName]) return;

    actions[animationName].reset().fadeIn(0.5).play();
    return () => {
      actions[animationName]?.fadeOut(0.5);
    };
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />

      <skinnedMesh
        geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
        material={materials.Wolf3D_Hair}
        skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Glasses as SkinnedMesh).geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={(nodes.Wolf3D_Glasses as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
      />

      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeLeft as SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeLeft as SkinnedMesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as SkinnedMesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeRight as SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeRight as SkinnedMesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences}
      />
    </group>
  );
};

// --- Preload (optional but recommended)
useGLTF.preload('/models/animations/developer.glb');

export default Developer;
