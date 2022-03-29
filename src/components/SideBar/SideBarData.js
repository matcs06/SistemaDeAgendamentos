import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EventIcon from '@mui/icons-material/Event';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

export const SideBarData = [
   {
      title: "Ver Serviços",
      icon: <DesignServicesIcon />,
      link: "admin/servicesList"
   },
    {
      title: "Criar Serviço",
      icon: <AddBoxIcon />,
      link: "/admin/createService"
   },
     {
      title: "Ver Horário",
      icon: <FindInPageIcon />,
      link: "/admin/availabilityInquiry"
   },
    {
      title: "Criar Horário",
      icon: <MoreTimeIcon />,
      link: "/admin/createAvailability"
   },
   {
      title: "Agendamentos",
      icon: <EventIcon />,
      link: "admin/openSchedules/"
   },
   {
      title: "Ifinance",
      icon: <PriceChangeIcon />,
      link: "admin/finance/"
   },
   {
      title: "Site do Cliente",
      icon: <AirlineSeatReclineExtraIcon/>,
      link: "admin/openClient/"
   },
]