import { useSettingsContext } from "@/components/settings";
import React from "react";
import { Helmet } from "react-helmet-async";
import { Container, Card } from "@mui/material";
import { PATH_DASHBOARD } from "@/routes/path";
import useLocales from "@/locales/useLocales";
import CustomBreadcrumbs from "@/components/custom-breadcrumbs/CustomBreadcrumbs";
import { useParams } from "react-router-dom";
import { useGetMovieQuery } from "@/redux/apiStore";

// ------------------------------------------------------------------------

const WatchMoviePage = () => {
  const { themeStretch } = useSettingsContext();

  const { translate } = useLocales();

  const { id } = useParams();

  const { data, isLoading } = useGetMovieQuery({ id });

  console.log("watch", data);

  return (
    <>
      <Helmet>
        <title>{`Movie: Watch ${data?.title} | 4K Movie`}</title>
      </Helmet>

      <Container maxWidth={false}>
        <CustomBreadcrumbs
          heading={`${translate("watchMovie")}`}
          links={[
            { name: `${translate("home")}`, href: PATH_DASHBOARD.root },
            { name: `${translate("detail")}` },
            {
              name: `${translate("watchMovie")}`,
            },
            { name: data?.title },
          ]}
        />

        <Card
          sx={{
            position: "relative",
            paddingBottom: { xs: "100%", md: "75%", lg: "56.25%" },
            height: 0,
            overflow: "hidden",
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
            title="Movie player"
            frameBorder="0"
            allowFullScreen
          />
        </Card>
      </Container>
    </>
  );
};

export default WatchMoviePage;
