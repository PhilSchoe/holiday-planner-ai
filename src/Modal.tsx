interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

export default function Modal({ open, children }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      {children}
    </div>
  );
}
