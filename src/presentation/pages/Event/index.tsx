import { Header, SideBar, VideoPlayer } from "@/presentation/components";
import { useParams } from "react-router-dom";


const Event: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {!!slug ? <VideoPlayer videoSlug={slug} /> : <div className="flex-1" />}
        <SideBar />
      </main>
    </div>
  );
}

export default Event;