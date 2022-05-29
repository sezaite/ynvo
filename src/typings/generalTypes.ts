export type Statuses = 'idle' | 'loading' | 'success' | 'error';


export interface Listings {
    name: string;
    link: string;
}

export interface ProfileProps {
    id: string;
    nickname: string,
    listings: Array<Listings>;
    image: string;
}

export interface ReviewCardProps {
    id?: string | number,
    image: string;
    stars: number; 
    name: string;
    signatureSmell: string;
    review: string;
    title?: string;
    likes?: number;
   
}
