export interface LessonsProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}