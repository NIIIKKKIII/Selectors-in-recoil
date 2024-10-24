// import { useRecoilValue, RecoilRoot } from "recoil";
// import { networkAtom, jobsAtom, notificationAtom, messagingAtom, totalNotificationSelector } from "./Store/Atoms"

// function App(){
//   return (
// <RecoilRoot>
//     <Mainapp/>
//   </RecoilRoot>
//   ) 

// };


// function Mainapp(){
//   const NetworkNotificationCount = useRecoilValue(networkAtom)
//   const JobsAtomCount = useRecoilValue(jobsAtom)
//   const NotificationCount = useRecoilValue(notificationAtom)
//   const MessagingCount = useRecoilValue(messagingAtom)
//   // Now I can use the selector here directly 
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector)
//   return ( <>
// <button>Home{}</button>
//     <button>My network{NetworkNotificationCount >=100 ? "99+" : NetworkNotificationCount}</button>
//     <button>Jobs {JobsAtomCount}</button>
//     <button>Notifications{NotificationCount}</button>
//     <button>Messaging {MessagingCount}</button>


//     <button>Me {totalNotificationCount}</button>



//   </>)
    
//   }
// export default App;



import { useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil";
import { networkAtom, jobsAtom, notificationAtom, messagingAtom, totalNotificationSelector } from "./Store/Atoms"

function App(){
  return (
<RecoilRoot>
    <Mainapp/>
  </RecoilRoot>
  ) 

};


function Mainapp(){
  const NetworkNotificationCount = useRecoilValue(networkAtom)
  const JobsAtomCount = useSetRecoilState(jobsAtom)
  const NotificationCount = useRecoilValue(notificationAtom)
  const MessagingCount = useRecoilValue(messagingAtom)
  // Now I can use the selector here directly 
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return ( <>
<button>Home{}</button>
    <button>My network{NetworkNotificationCount >=100 ? "99+" : NetworkNotificationCount}</button>
    <button>Jobs {JobsAtomCount}</button>
    <button>Notifications{NotificationCount}</button>
    <button>Messaging {MessagingCount}</button>


    <button>Me {totalNotificationCount}</button>


    



  </>)
    
  }
export default App;