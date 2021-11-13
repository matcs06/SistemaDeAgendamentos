import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EventIcon from '@mui/icons-material/Event';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import FindInPageIcon from '@mui/icons-material/FindInPage';

export const SideBarData = [
   {
      title: "Serviços",
      icon: <DesignServicesIcon />,
      link: "admin/servicesList"
   },
    {
      title: "Agendamentos",
      icon: <EventIcon />,
      link: "admin/openSchedules/"
   },
    {
      title: "Criar Serviço",
      icon: <AddBoxIcon />,
      link: "/"
   },
    {
      title: "Criar Horário",
      icon: <MoreTimeIcon />,
      link: "/admin/createAvailability"
   },
     {
      title: "Ver Horário",
      icon: <FindInPageIcon />,
      link: "/admin/availabilityInquiry"
   }
]