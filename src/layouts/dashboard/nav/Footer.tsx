import { Link as RouterLink, useLocation } from "react-router-dom";
// @mui
import {
  Box,
  Grid,
  Link,
  Stack,
  Divider,
  Container,
  Typography,
  IconButton,
  Tooltip,
} from "@mui/material";
// routes
import { PATH_ROUTER } from "@/routes/path";
// _mock
import { _socialsAccount } from "@/_mock/arrays";
// components
import Logo from "@/components/logo";
import Iconify from "@/components/iconify";

// ----------------------------------------------------------------------

const LINKS = [
  {
    headline: "4K Movie",
    children: [
      { name: "About us", href: PATH_ROUTER.about },
      { name: "Contact us", href: PATH_ROUTER.contact },
      { name: "FAQs", href: PATH_ROUTER.faqs },
    ],
  },
  {
    headline: "Legal",
    children: [
      { name: "Terms and Condition", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
  {
    headline: "Contact",
    children: [
      { name: "nqcthedev@gmail.com", href: "#" },
      { name: "HCMC, 111  Bình Thạnh", href: "#" },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ position: "relative", bgcolor: "background.default" }}
    >
      <Divider />

      <Container sx={{ pt: 10 }}>
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <Logo sx={{ mx: { xs: "auto", md: "inherit" } }} />
          </Grid>

          <Grid item xs={8} md={3}>
            <Typography variant="body2" sx={{ pr: { md: 5 } }}>
              Welcome you to 4k Movie, have fun watching the movie
            </Typography>

            <Stack
              spacing={1}
              direction={"row"}
              justifyContent={{ xs: "center", md: "flex-start" }}
              sx={{ mt: 5, mb: { xs: 5, md: 0 } }}
            >
              {_socialsAccount.map((social) => (
                <Tooltip key={social.name} title={social.name}>
                  <IconButton >
                  <Iconify icon={social.icon} />
                </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Stack
              spacing={5}
              justifyContent="space-between"
              direction={{ xs: "column", md: "row" }}
            >
              {LINKS.map((list) => (
                <Stack
                  key={list.headline}
                  spacing={2}
                  alignItems={{ xs: "center", md: "flex-start" }}
                >
                  <Typography component="div" variant="overline">
                    {list.headline}
                  </Typography>

                  {list.children.map((link) => (
                    <Link
                      key={link.name}
                      component={RouterLink}
                      to={link.href}
                      color="inherit"
                      variant="body2"
                    >
                      {link.name}
                    </Link>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Typography
          variant="caption"
          component="div"
          sx={{
            mt: 10,
            pb: 5,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          © 2023. All by nqcthedev
        </Typography>
      </Container>
    </Box>
  );
}
