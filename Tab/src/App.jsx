import { useState } from 'react';
import './App.css';

function App() {
  // Array containing the tabs and their corresponding content
  const tabs = [
    {
      id: 1,
      title: "Tab 1",
      content: "HTML elements tell the browser how to display the content. For example, you can use HTML to create static pages with text, headings, tables, lists, images, links, and more."
    },
    {
      id: 2,
      title: "Tab 2",
      content: "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML."
    },
    {
      id: 3,
      title: "Tab 3",
      content: "JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior."
    }
  ];

  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <>
      {/* Dynamically generate buttons based on the number of tabs */}
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => setSelectedTab(tab.id)}>
          {tab.title}
        </button>
      ))}

      {/* Dynamically show the content based on the selected tab */}
      <div>
        {tabs.map((tab) => (
          tab.id === selectedTab && (
            <div key={tab.id}>
              <h2>{tab.title}</h2>
              <p>{tab.content}</p>
            </div>
          )
        ))}
      </div>
    </>
  );
}

export default App;
