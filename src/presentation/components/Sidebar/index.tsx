import { Lesson } from "@/presentation/components";
import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
    id
    lessonType
    availableAt
    title
    slug
  }
}
`

interface QueryResponse {
 lessons:{
  id: number;
  lessonType: 'class'|'live';
  availableAt: string;
  title: string;
  slug: string;
 }[]

}

const Sidebar: React.FC = () => {
  const {data} = useQuery<QueryResponse>(GET_LESSONS_QUERY);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b boder-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar; 