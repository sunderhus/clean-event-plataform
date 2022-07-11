import { CheckCircle, Lock } from 'phosphor-react'
import { LessonsProps } from './interfaces';
import {isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';
const Lesson: React.FC<LessonsProps> = ({
  availableAt,
  title,
  type,
  slug
}) => {
  const isLessonAvailable = isPast(availableAt);
  const availableAtFormatted = format(availableAt,"EEEE' • 'd ' de ' MMMM' • 'k'h'mm",{locale:ptBR})
 
  return (
    <Link to={`/event/lesson/${slug}`} className='group' >
      <span className="text-gray-300">
        {availableAtFormatted}
      </span>
      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 uppercase font-bold">
            {type === 'live' ? 'Ao vivo' : 'Aula Prática'}
          </span>
        </header>
        <strong className="text-gray-200 block mt-5">
          {title}
        </strong>
      </div>
    </Link>
  );
}

export default Lesson;