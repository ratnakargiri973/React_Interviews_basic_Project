// import React from 'react'
// import { useState } from 'react'

// function App() {
//   const [id, setId] = useState(1);

//     const data=[
//         {
//             title:"para1",
//             contenet:"para1"

//         },
//         {
//             title:"para2",
//             contenet:"para2"

//         },
//         {
//             title:"para3",
//             contenet:"para3"

//         },
//     ]
//     return(
//         <>
//         {
//             data.map((item,index)=>{
//                 return(
//                     <>
//                     <h1>{item.title}</h1>
//                     <button onClick={()=>setId(index+1)}>➕</button>
//                     {id===index+1&&<p>{item.contenet}</p>}
//                     </>
//                 )
//             })
//         }
        
//         </>
//     )
    
// }

// export default App



import React, { useState } from 'react';

function App() {
  const [id, setId] = useState(null);  // Initially no content is shown

  const data = [
    {
      title: "para1",
      content: "This is content for para1",
    },
    {
      title: "para2",
      content: "This is content for para2",
    },
    {
      title: "para3",
      content: "This is content for para3",
    },
  ];

  return (
    <>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.title}</h1>
            <button onClick={() => setId(index + 1)}>➕</button>
            {id === index + 1 && <p>{item.content}</p>} {/* Conditionally display content */}
          </div>
        );
      })}
    </>
  );
}

export default App;
