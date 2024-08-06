
export const setNewAccessToken = async ({
  refreshToken = ''
}: {
  refreshToken: string
}) => {
  const res = await fetch('http://localhost:5000/api/v1/auth/refresh-token', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`
    }
  })
  const payload = await res.json()
  return payload
}
