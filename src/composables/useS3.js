import { ref, computed } from 'vue'
import S3Api from '@/api/S3Api'

export default function useS3() {

    async function uploadFile(url, data) {
        return await S3Api.upload(url, data)
    }

    return {
        uploadFile
    }
}
