


export interface AuthUser{
    username?: string,
    email: string,
    password: string
}

export interface User{
    username?: string,
    email?: string,
    password?: string,
    bio?: string
}

export interface Article{
    title: string;
    description: string;
    body: string;
    tagList? : string[];
}


export interface ArticleProps{
    slug: string,
    title: string,
    description: string,
    body: string,
    tagList: string[],
    favorited: true,
    favoriteCount: number,
}
