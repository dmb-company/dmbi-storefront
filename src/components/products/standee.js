import { getStore } from '@/api/store/api';
import Image from 'next/image';

const Standee = async () => {
    const store = await getStore();
    const standeeImage = store?.metadata?.standee;
    return (
        <div>
            <Image
                width={500}
                height={500}
                src={standeeImage}
                alt="dmbi-standee"
            />
        </div>
    );
};

export default Standee;
