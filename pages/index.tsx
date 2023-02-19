import Navbar from '@/components/Navbar';
import Controls from '@/components/Controls';

import ReactFlow, { Background } from 'reactflow';

import styled from '../styles/Home.module.css'
import 'reactflow/dist/style.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styled.background}>
        <ReactFlow>
          <Background size={1.5} color='#e6e6e6' />
        </ReactFlow>
      </div>
      <Controls />
    </>
  )
}
