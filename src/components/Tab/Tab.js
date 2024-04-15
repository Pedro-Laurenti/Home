// components/Tab.js
import React, { useState } from 'react';
import styles from './Tab.module.scss'; // Importando os estilos

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return (
          <div>
            <h2>Conteúdo da Aba 1</h2>
            <p>Este é o conteúdo da aba 1.</p>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Conteúdo da Aba 2</h2>
            <p>Este é o conteúdo da aba 2.</p>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Conteúdo da Aba 3</h2>
            <p>Este é o conteúdo da aba 3.</p>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Conteúdo da Aba 4</h2>
            <p>Este é o conteúdo da aba 4.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs}>
        <button className={activeTab === 1 ? styles.activeTab : ''} onClick={() => setActiveTab(1)}>Aba 1</button>
        <button className={activeTab === 2 ? styles.activeTab : ''} onClick={() => setActiveTab(2)}>Aba 2</button>
        <button className={activeTab === 3 ? styles.activeTab : ''} onClick={() => setActiveTab(3)}>Aba 3</button>
        <button className={activeTab === 4 ? styles.activeTab : ''} onClick={() => setActiveTab(4)}>Aba 4</button>
      </div>
      <div>
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Tab;