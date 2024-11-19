import { headers } from 'next/headers';

// Utility function to detect SSR
function isSSR() {
    try {
        const acceptHeader = headers().get('accept');
        return acceptHeader?.includes('text/html') ?? false;
    } catch (err) {
        // Return false in case headers are unavailable (likely client-side)
        return false;
    }
}

const fallback = {
    title: 'DMB Industrial',
};

// Wrapper function to generate metadata with SSR fallback
export const generateMetadataWithFallback =
    (generateMetadata, staticMetadata) => async (params) => {
        if (isSSR()) {
            // For SSR, generate metadata dynamically
            return await generateMetadata(params);
        } else {
            // For client-side, use fallback + static metadata
            return { ...fallback, ...staticMetadata };
        }
    };
