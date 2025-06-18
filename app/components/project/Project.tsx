import { useRouter } from "next/navigation";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const router = useRouter();

  const bgColor =
    project.statusColor === "purple"
      ? "bg-purple-900 text-purple-800"
      : "bg-green-700 text-green-700";
  const isFinish = project.status === "Proyek Berjalan" ? "block" : "hidden";

  return (
    <div
      onClick={() => {
        router.push(`/sukuk/${project.id}`);
      }}
      className="rounded-xl cursor-pointer overflow-hidden shadow border"
    >
      <div className="relative h-40">
        <img
          src={
            project.medias.length != 0
              ? project.medias[0].path
              : "/images/img.jpg"
          }
          alt={project.alt}
          className="object-cover w-full h-full"
        />
        <div
          className={`absolute inset-0 ${
            project.statusColor === "purple" ? "bg-purple-900" : "bg-green-700"
          } bg-opacity-60`}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            className={`bg-white ${bgColor} text-xs font-bold px-4 py-1 rounded-full shadow`}
          >
            {project.status}
          </span>
        </div>
      </div>
      <div className="p-4 bg-gray-100 h-full">
        <p className="font-semibold text-sm text-start mb-2">{project.title}</p>
        <ul className="text-xs my-4 space-y-1">
          <li className="flex justify-between font-bold">
            <span>Dana Terkumpul</span>
            <span>{project.goal}</span>
          </li>
          <li className={isFinish}>
            <div className="relative w-[80%] h-4 bg-purple-200 rounded-full my-2">
              <div
                className="absolute top-0 left-0 h-4 bg-[#3E268D] rounded-full"
                style={{ width: "100%" }}
              ></div>
              <span className="absolute right-[-4px] top-1/2 -translate-y-1/2 translate-x-full bg-green-500 text-white text-xs font-bold px-2 rounded-full shadow">
                100%
              </span>
            </div>
          </li>
          <li className="flex justify-between">
            <span>Kebutuhan Modal</span>
            <span>{project.modal}</span>
          </li>
          <li className="flex justify-between">
            <span>Minimal Investasi</span>
            <span>{project.minInvest}</span>
          </li>
          <li className="flex justify-between">
            <span>Jangka Waktu</span>
            <span>{project.periode}</span>
          </li>
          <li className="flex justify-between">
            <span>Proyeksi ROI</span>
            <span>{project.roi}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
