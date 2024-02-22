import { where } from "firebase/firestore";

onAuthStateChanged(auth, async (user) => {
    if (!user) {
        window.location = 'index.html'
        return
    }
    uid = user.uid
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        userData = doc.data()
        // console.log(doc.data());
        idName.innerHTML = doc.data().names
        imageNav.src = doc.data().profileUrl
        img = doc.data().profileUrl
        logname = doc.data().names
    });
    getdataformfirestore(uid)
    // renderPost(img)
});