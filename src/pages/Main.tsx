import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.svg';
import image1 from '../assets/illustration-editor-desktop.svg';
import image2 from '../assets/illustration-phones.svg';
import image3 from '../assets/illustration-laptop-desktop.svg';
import Header from '../componets/templates/Header';
import { IMenuItem } from '../interfaces/IMenuItem';
import { ISection } from '../interfaces/ISections';
import Container from '../componets/templates/Container';
import Footer from '../componets/templates/Footer';
import { getData } from '../ApiClient';
import { sections1, sections2, sections3 } from './data';
import '../App.css';

const Main = () => {
  const [section1, setSection1] = useState<ISection[]>(sections1);
  const [section2, setSection2] = useState<ISection[]>(sections2);
  const [section3, setSection3] = useState<ISection[]>(sections3);

  useEffect(() => {
    const loadInfo = async () => {
      const { data, status } = await getData();
      if (status === 200) {
        const info = data.data;
        setSection1([
          {
            title: info[0].title,
            description: info[0].body
          },
          {
            title: info[1].title,
            description: info[1].body
          },
        ]);
        setSection2([
          {
            title: info[2].title,
            description: info[2].body
          },
        ]);
        setSection3([
          {
            title: info[3].title,
            description: info[3].body
          },
          {
            title: info[4].title,
            description: info[4].body
          },
        ]);
      }
    }
    loadInfo();
  }, []);

  const menu: IMenuItem[] = [
    {
      title: 'Product',
      children: [
        'Overview',
        'Pricing',
        'Marketplace',
        'Features',
        'Integrations',
      ]
    },
    {
      title: 'Company',
      children: [
        'About',
        'Team',
        'Blog',
        'Careers',
      ]
    },
    {
      title: 'Connect',
      children: [
        'Contact',
        'Newsletter',
        'LinkedIn',
      ]
    }
  ];


  const footerList = [
    {
      title: 'Product',
      items: [
        'Overview',
        'Pricing',
        'Marketplace',
        'Features',
        'Integrations',
      ]
    },
    {
      title: 'Company',
      items: [
        'About',
        'Team',
        'Blog',
        'Careers',
      ]
    },
    {
      title: 'Connect',
      items: [
        'Contact',
        'Newsletter',
        'LinkedIn',
      ]
    },
  ]
  return (
    <div className="App">

      <Header items={menu} />

      <Container title="Designed for the future" sections={section1} image={image1} />

      <Container sections={section2} image={image2} position="reverse" alt />

      <Container sections={section3} image={image3} position="reverse" />

      <Footer logo={logo} items={footerList} />

    </div>
  );
}

export default Main;
