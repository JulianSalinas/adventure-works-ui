import { Avatar, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Box } from '@mui/system';
import { useUserIdentityContext } from '../contexts/UserIdentityContext';

function getInitials(name: string): string {
  if (!name || name.length === 0) return "#";
  let parts = name.replaceAll(/\s+/ig, " ").split(" ");
  let initials = parts.length >= 2 ? parts[0][0] + parts[1][0] : parts[0][0];
  return initials.toUpperCase();
}

const Header: React.FC<{}> = (props: React.PropsWithChildren<{}>) => {

  const { userIdentity } = useUserIdentityContext();

  return (
    <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", p: 2 }}>
      <Box></Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ textAlign: "right" }}>
          <Typography variant={"body1"}>
          {userIdentity.username}
          </Typography>
          <Typography variant={"body2"} sx={{ fontWeight: "light" }}>
            {userIdentity.email}
          </Typography>
        </Box>
        <Avatar sx={{ backgroundColor: deepOrange[500], width: 56, height: 56 }} variant="rounded">
          {getInitials(userIdentity.username)}
        </Avatar>
      </Box>
    </Box>
  );
};

export default Header;