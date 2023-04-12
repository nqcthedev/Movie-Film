import React, { useEffect } from "react";
import { useState } from "react";
// @mui
import {
  Box,
  Stack,
  Avatar,
  Divider,
  ListItem,
  Typography,
  useTheme,
  Tooltip,
} from "@mui/material";
// utils
import { fcalculateCreatedTime } from "@/utils/formatTime";
import FormProvider from "@/components/hook-form/FormProvider";
import { useForm } from "react-hook-form";
import { RHFTextField } from "@/components/hook-form";
import { LoadingButton } from "@mui/lab";
import Iconify from "@/components/iconify/Iconify";
import { _iconComment } from "@/_mock/arrays";
import { addDoc, collection } from "firebase/firestore";
import { IMoviePostComment } from "@/@types/movie";
import { useAuthContext } from "@/auth/useAuthContext";
import { DB } from "@/auth/FireBaseContext";
import { useSnackbar } from "@/components/snackbar";
import ReactionCommentsMovie from "../reacttion/ReactionCommentsMovie";
import ShowReactionCommentsMovie from "../reacttion/ShowReactionCommentsMovie";

// --------------------------------------------------------------------------------------

type Props = {
  name: string;
  avatarUrl: string;
  message: string;
  tagUser?: string;
  postedAt: any;
  hasReply?: boolean;
  movieId: any;
  commentParentId?: any;
  listComment: IMoviePostComment[];
  replyComment: string;
  reactions: any[];
};

// ----------------------------------------------------------------------

type FormValuesProps = {
  replyComment: string;
};

const MoviePostCommentItem = ({
  name,
  avatarUrl,
  message,
  tagUser,
  postedAt,
  hasReply,
  movieId,
  commentParentId,
  listComment,
  replyComment,
  reactions,
}: Props) => {
  const [openReply, setOpenReply] = useState<boolean>(false);

  const [openReaction, setOpenReaction] = useState<boolean>(false);

  const [changeColor, setChangeColor] = useState<boolean>(false);

  const { user } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const handleShowReplyComment = () => {
    if (!user) {
      return enqueueSnackbar("Bạn cần đăng nhập để sử dụng bình luận", {
        variant: "warning",
      });
    } else {
      return setOpenReply(!openReply);
    }
  };

  const theme = useTheme();

  console.log(openReaction);

  const defaultValues = {
    replyComment: "",
  };

  const methods = useForm<FormValuesProps>({
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (values.replyComment.trim() !== "") {
      return setChangeColor(true);
    } else {
      return setChangeColor(false);
    }
  }, [values]);

  const onSubmit = async (data: FormValuesProps) => {
    try {
      const replyComment: IMoviePostComment = {
        replyComment: commentParentId,
        movieId: movieId,
        userId: user?.uid,
        userName: user?.displayName,
        avatarUrl: user?.photoURL,
        message: data.replyComment,
        reactions: [],
        postedAt: Date.now(),
      };
      await addDoc(collection(DB, "comments"), replyComment);
      enqueueSnackbar("Phản hồi thành công", { variant: "success" });
      reset();
      setOpenReply(false);
    } catch (err: any) {}
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <ListItem
        disableGutters
        sx={{ alignItems: "flex-start", py: 3, ...(hasReply && { ml: 8 }) }}
      >
        <Avatar
          alt={name}
          src={avatarUrl}
          sx={{ mr: 2, width: 48, height: 48 }}
        />

        <Stack>
          <Stack
            sx={{
              background:
                theme.palette.mode === "dark"
                  ? theme.palette.grey[800]
                  : theme.palette.grey[300],
              p: 1.2,
              borderRadius: 2,
            }}
          >
            <Typography variant="subtitle1"> {name} </Typography>

            <Typography variant="body2" gutterBottom>
              {hasReply && replyComment !== null && (
                <Box component="strong" sx={{ mr: 0.5 }}>
                  @{listComment?.find((p) => p?.id === replyComment)?.userName}
                </Box>
              )}
              {message}
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2} ml={1}>
            <Typography
              color="text.secondary"
              variant="caption"
              fontWeight="bold"
              onMouseEnter={() => setOpenReaction(true)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Thích
            </Typography>
            <Typography
              color="text.secondary"
              onClick={handleShowReplyComment}
              variant="caption"
              fontWeight="bold"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Phản hồi
            </Typography>

            <Typography variant="caption" sx={{ color: "text.disabled" }}>
              {fcalculateCreatedTime(postedAt)}
            </Typography>
          </Stack>
        </Stack>
        {reactions?.length > 0 && (
          <ShowReactionCommentsMovie reactions={reactions} />
        )}
      </ListItem>

      {openReaction && (
        <ReactionCommentsMovie
          reactions={reactions}
          showReaction={openReaction}
          setShowReaction={setOpenReaction}
          commentParentId={commentParentId}
          hasReply={hasReply}
        />
      )}

      {openReply && (
        <Box
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 2,
            ml: "auto",
            width: (theme) => `calc(100% - ${theme.spacing(7)})`,
            background:
              theme.palette.mode === "dark"
                ? theme.palette.grey[800]
                : theme.palette.grey[300],
            position: "relative",
          }}
        >
          <RHFTextField
            autoFocus
            name="replyComment"
            placeholder="Write some of your comments..."
            multiline
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={1.5}
          >
            <Stack direction="row" alignItems="center" spacing={2}>
              {_iconComment.map((icon) => (
                <Tooltip key={icon.value} title={icon.name}>
                  <Iconify
                    icon={icon.icon}
                    sx={{ cursor: "pointer", color: "text.secondary" }}
                  />
                </Tooltip>
              ))}
            </Stack>

            <LoadingButton type="submit" loading={isSubmitting}>
              <Iconify
                icon="carbon:send-filled"
                sx={{ color: changeColor ? "text.main" : "text.disabled" }}
              />
            </LoadingButton>
          </Stack>
        </Box>
      )}
      <Divider
        sx={{
          ...(hasReply && {
            ml: 7,
          }),
        }}
      />
    </FormProvider>
  );
};

export default MoviePostCommentItem;
