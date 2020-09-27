//@flow
export type SelectProps = {
  value: string,
  options: string[],
  onChangeSelected: (value: string) => void,
  maxHeight?: number,
};

export type ModalPikerProps = {
  value: string,
  options: string[],
  isVisible: boolean,
  onClose: () => void,
  onChangeSelected: (value: string) => void,
  maxHeight?: number,
};
