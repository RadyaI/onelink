import { addDoc, collection, deleteDoc, doc, getDocs, query, Timestamp, where } from "firebase/firestore"
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
            card1status: true,
            card1link: 'https://example.com/',

            card2: 'Second Link',
            card2status: true,
            card2link: 'https://example.com/',

            card3: 'Third Link',
            card3status: true,
            card3link: 'https://example.com/',

            card4: 'Fourth Link',
            card4status: true,
            card4link: 'https://example.com/',

            card5: 'Last Link',
            card5status: true,
            card5link: 'https://example.com/',

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

export async function deletePage(id) {
    try {
        const { $db } = useNuxtApp()
        const del = await deleteDoc(doc($db, 'pages', id))
        return true
    } catch (error) {
        throw new Error(error)
    }
}