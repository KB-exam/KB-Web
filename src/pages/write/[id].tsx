import { useRouter } from 'next/router';
import { WritePage } from '.';

export default () => {
    const { query } = useRouter()
    return WritePage(query.id as string | undefined)
}