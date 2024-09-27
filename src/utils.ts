interface WithId {
  id: string;
}

export const saveData = <T extends WithId>(
  data: T[],
  setData: (updated: T[]) => void,
  id: string,
  updatedData: Partial<T>
) => {
  const updated = data.map((item) => (item.id === id ? { ...item, ...updatedData } : item));
  setData(updated);
};
