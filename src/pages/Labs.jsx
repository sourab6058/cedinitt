import { FaAngleRight } from "react-icons/fa";
import LabsTable from "../components/Labs/LabsTable";

const rowsFirst = [
  "Modern work space",
  "Communication facilities",
  "Computing facilities",
  "Equipment labs",
  "Library & information Centre",
  "Training and conference facilities",
];

export default function Labs() {
  return (
    <div className="min-w-[100wv] min-h-[100vh] bg-slate-100 flex flex-col items-center justify-start gap-4 p-5">
      <h1 className="text-3xl font-semibold">
        Facility / Lab / Infrastructure
      </h1>
      <div className="p-0.5 w-[100px] bg-blue-500"></div>
      <div className="w-full p-4 bg-white shadow rounded">
        <h1 className="text-xl font-bold border-b-2 border-b-blue-500 pb-2 flex items-center">
          <FaAngleRight className="text-blue-500 text-2xl" />
          R&D FACILITIES
        </h1>
        <p className="mt-2 text-lg">
          The Talent to access the development of technology ventures is in the
          person who recognizes an opportunity to utilize the available
          resources and facilities at CEDI and who is willing to take necessary
          social, psychological, and financial risks to develop this opportunity
          into a business. Certain essential facilities, which are created in
          CEDI, are also provided. Access to NITT Labs and Infrastructure will
          be used by the incubatees on payment basis.
        </p>
        <LabsTable rows={rowsFirst} />
      </div>
    </div>
  );
}
