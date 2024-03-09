import Pagination from "@/app/ui/pagination";
import AdoptionPg1 from "./1/page";
import AdoptionPg2 from "./2/page";
import AdoptionPg3 from "./3/page";
import AdoptionPg4 from "./4/page";
import AdoptionPg5 from "./5/page";
import AdoptionPg6 from "./6/page";


export default function Page() {
  const childComponents = [AdoptionPg1, AdoptionPg2, AdoptionPg3, AdoptionPg4, AdoptionPg5, AdoptionPg6]

  return (
    <>
      <Pagination
        title="Adoption Application"
        pgLen={6}
        childComponents={childComponents}
      />
    </>
  )
}
