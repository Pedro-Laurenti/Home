// components/Tab.js
import React, { useState } from 'react';
import styles from './Tab.module.scss'; // Importando os estilos

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div className={styles.tabContent}>
            <li>Vivacom Planos de saúde</li>
            <li>SulAmérica saúde</li>
            <li>Cassi</li>
            <li>BAAN</li>
            <li>Amil</li>
            <li>CAESAN</li>
            <li>Ipasgo</li>
            <li>Proasa</li>
          </div>
        );
      case 2:
        return (
          <div className={styles.tabContent}>
            <li>Unimed</li>
            <li>proasa</li>
            <li>vivacom</li>
            <li>ipasgo</li>
          </div>
        );
      case 3:
        return (
          <div className={styles.tabContent}>
            <li>Unimed</li>
            <li>Ipasgo (somente por liminar)</li>
            <li>Caesan</li>
          </div>
        );
      case 4:
        return (
          <div className={styles.tabContent}>
            <li>Unimed</li>
            <li>Evida</li>
            <li>Amil</li>
            <li>CAESAN</li>
            <li>Life</li>
            <li>Amhp</li>
            <li>Asmepro</li>
            <li>Amai</li>
            <li>Proasa</li>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <button className={activeTab === 1 ? `${styles.tab} ${styles.active}` : styles.tab} onClick={() => handleTabClick(1)}>Anápolis</button>
        <button className={activeTab === 2 ? `${styles.tab} ${styles.active}` : styles.tab} onClick={() => handleTabClick(2)}>Jaraguá</button>
        <button className={activeTab === 3 ? `${styles.tab} ${styles.active}` : styles.tab} onClick={() => handleTabClick(3)}>Nerópolis</button>
        <button className={activeTab === 4 ? `${styles.tab} ${styles.active}` : styles.tab} onClick={() => handleTabClick(4)}>Taguatinga - DF</button>
      </div>
      <div>
        {/* Renderizar o conteúdo da aba ativa */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tab;