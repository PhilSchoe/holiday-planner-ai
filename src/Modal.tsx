interface ModalProps {
  open: boolean;
  children: React.ReactNode;
}

export default function Modal({ open, children }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 flex items-start justify-center transition-colors pt-32 ${
        open ? "visible bg-black/30" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded shadow p-6 transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
