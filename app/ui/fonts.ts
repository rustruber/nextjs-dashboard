// Этот файл будет использоваться для хранения шрифтов, которые будут применяться во всем приложении.
// Импортируйте Inter шрифт из next/font/google:
import {Inter, Lusitana} from 'next/font/google';

// Вы хотите загрузить. В этом случае 'latin':
export const inter = Inter({subsets: ['latin']});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin']
});
