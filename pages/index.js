import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Skill from '../components/Skill';
import Exprience from '../components/Exprience';
import Certificate from '../components/Certificate';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className='container mx-auto border shadow-2xl'>
      <Navbar />
      <Header/>
      <Certificate />
      <Skill />
      <Exprience />
      <Contact />
    </div>
  );
}   

