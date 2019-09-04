export const makeFormData = ({
  name,
  price,
  stock,
}) => {
  const form = new FormData()
  if (name) form.append('nombre', name)
  if (price) form.append('precio', name)
  if (stock) form.append('stock', name)
  return form
}