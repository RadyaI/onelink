import { addDoc, collection, getDocs, query, Timestamp, where } from "firebase/firestore"
import { useNuxtApp } from "nuxt/app"


export async function newPage(name, uid, photo, linkName, theme) {
    try {
        const { $db } = useNuxtApp()
        const dateObj = new Date()

        const newData = {
            uid: uid,
            thumbnail: name[0],
            pageName: name,
            linkName: linkName,
            profil: photo,
            name: 'Your Name',
            bio: 'Streaming Gaming Content',
            theme: theme,
            instagram: 'https://instagram.com/',
            instagramStatus: true,
            youtube: 'https://youtube.com/',
            youtubeStatus: true,
            github: 'https://github.com/',
            githubStatus: true,
            tiktok: 'https://tiktok.com/',
            tiktokStatus: true,
            wa: '081234567890',
            waStatus: true,
            facebook: 'https://facebook.com/',
            facebookStatus: true,
            card1: 'First Link',
            card2: 'Second Link',
            card3: 'Third Link',
            card4: 'Fourth Link',
            card5: 'Last Link',
            views: 0,
            created_at: `${dateObj.getUTCDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`,
            time: Timestamp.now().toMillis(),
        }

        const check = await getDocs(query(collection($db, 'pages'), where('linkName', '==', linkName)))
        if (check.empty) {
            const add = await addDoc(collection($db, 'pages'), newData)
            return add
        } else {
            return {
                status: false,
                message: 'Link name is already in use'
            }
        }

    } catch (error) {
        throw new Error(error)
    }
}