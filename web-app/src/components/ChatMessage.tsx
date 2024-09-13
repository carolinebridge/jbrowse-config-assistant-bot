import { Box, Grid2, Typography } from '@mui/material'

import { IChatMessage } from '../util'

export default function ChatMessage({
  messages,
}: {
  messages: IChatMessage[]
}) {
  return (
    <Grid2
      container
      spacing={1}
      sx={{ overflow: 'hidden', overflowY: 'scroll' }}
    >
      {messages
        ? messages.map(message => {
            if (message.isUserMessage) {
              return (
                <UserMessage
                  key={`user-message-${message.id}`}
                  message={message.text}
                />
              )
            } else {
              return (
                <BotMessage
                  key={`bot-message-${message.id}`}
                  message={message.text}
                />
              )
            }
          })
        : null}
    </Grid2>
  )
}

function BotMessage({ message }: { message: string }) {
  return (
    <Grid2 size={8}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            padding: 1,
            borderRadius: 1,
            bgcolor: '#e5e7eb',
            wordBreak: 'break-all',
            whiteSpace: 'normal',
          }}
        >
          {message}
        </Typography>
      </Box>
    </Grid2>
  )
}

function UserMessage({ message }: { message: string }) {
  return (
    <Grid2 size={8} offset={4}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            padding: 1,
            borderRadius: 1,
            bgcolor: 'primary.main',
            color: 'white',
          }}
        >
          {message}
        </Typography>
      </Box>
    </Grid2>
  )
}