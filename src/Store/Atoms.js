import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networAtom",
    default: 102
});

export const jobsAtom= atom({
    key: "jobsAtom",
    default: 0
});

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
});

 export const messagingAtom = atom({
    key:'messagingAtom',
    default : 0
})

 export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get})=>{
        const NetworkNotificationCount = get(networkAtom)    // all the const that I have written here shows that the selector depends on them and returns the value whenever any value changes in any of them and returns the final output that we have written 
        const JobsAtomCount = get(jobsAtom)
        const NotificationCount= get(notificationAtom)
        const MessagingCount = get(messagingAtom)
        return  JobsAtomCount + NetworkNotificationCount + NotificationCount + MessagingCount

    }
})