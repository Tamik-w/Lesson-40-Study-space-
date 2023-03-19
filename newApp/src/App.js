import React, { useState } from "react";
import Article from "./components/Article/Article.js";

const App = () => {

const EN = {
    mainTitle: 'NVIDIA NEWS',
    articleTitle: 'NVIDIA Accelerated AI on Azure',
    description: 'Article description:',
    preview: 'NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.',
    content: 'Microsoft Azure and NVIDIA empower enterprises in the cloud to harness the combined power of NVIDIA accelerated computing and NVIDIA networking on demand to meet the diverse computational requirements of AI, machine learning, data analytics, graphics, virtual desktop, and high-performance computing (HPC) applications. From fractional GPUs and single GPUs to multiple GPUs across multiple nodes for distributed computing, access the right-sized GPU acceleration for your workloads.',
    buttonRead: 'Read',
    buttonClose: 'Close',
    markAsRead: 'Mark as read',
    markAsUnread: 'Mark as unread',
    authorName: 'Author: Mike',
    published: 'Published: 06.12.2022',
    theme: 'Theme: Video cards'

}
const UA = {
    mainTitle: 'НОВИНИ NVIDIA',
    articleTitle: 'NVIDIA прискорений штучний інтелект на Azure',
    description: 'Опис статті:',
    preview: 'NVIDIA на Azure надає підприємствам штучний інтелект, мережі та високопродуктивні обчислення.',
    content: 'Microsoft Azure та NVIDIA дозволяють підприємствам у хмарі використовувати об\'єднану міць прискорених обчислень NVIDIA та мереж NVIDIA на запит для задоволення різноманітних обчислювальних вимог ІІ, машинного навчання, аналізу даних, графіки, віртуальних робочих столів та високопродуктивних обчислень додатків HPC. Від дрібних графічних процесорів і одиночних графічних процесорів до кількох графічних процесорів на кількох вузлах для розподілених обчислень - отримайте доступ до прискорення графічного процесора потрібного розміру для робочих навантажень.',
    buttonRead: 'Читати',
    buttonClose: 'Закрити',
    markAsRead: 'Прочитано',
    markAsUnread: 'Не прочитано',
    authorName: 'Автор: Майк',
    published: 'Опубліковано: 06.12.2022',
    theme: 'Тема: Відео карти'
};

  const [isShow, setIsShow]  = useState(false);
  const [isRead, setIsRead] = useState(false);
  const toggleArticle = () => {
    isShow ? setIsShow(false) : setIsShow(true);
  }
  const checkAction = () => {
    isRead ? setIsRead(false) : setIsRead(true)
  }

  const [lang, setLang] = useState(EN);

  const toggleLangEN = () => {
    setLang(() => {
      return {...EN}
    })
  }
  
  const toggleLangUA = () => {
    setLang(() => {
      return {...UA}
    })
  }

  return (
    <div className="wrapper">
          <h1 className="title">{lang.mainTitle}</h1>
          <div className="article">
            <Article lang={lang} read={isRead} show={isShow}>
            <div className="article__title">
              <h2>{lang.articleTitle}</h2>
              </div>
            </Article>
          </div>
          <div className="article__actions__block">
            <div className="article__actions">
              <button onClick={checkAction} className="article__btn">{isRead ? lang.markAsUnread : lang.markAsRead} </button>
            </div>
            <div className="article__actions">
              <button onClick={toggleArticle} className="article__btn">{isShow ? lang.buttonClose : lang.buttonRead}</button>
            </div>
          </div>

          <div className="lang">
            <button
              onClick={toggleLangUA}
              className='lang-btn'
            >
              UA
            </button>
            <button
              onClick={toggleLangEN}
              className='lang-btn'
            >
              EN
            </button>
          </div>

    </div> 
    );
  }
export default App;