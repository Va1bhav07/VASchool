import Offcanvas from 'react-bootstrap/Offcanvas';
import type { OffcanvasProps } from 'react-bootstrap/Offcanvas';

type MobileCourseFilterProps = OffcanvasProps & {
  children: React.ReactNode;
  mobileFilterHandler: () => void;
  showMoblieFilter: boolean;
};

export function MobileCourseFilter({
  children,
  mobileFilterHandler,
  showMoblieFilter,
  ...props
}: MobileCourseFilterProps) {
  return (
    <Offcanvas
      data-bs-theme="dark"
      show={showMoblieFilter}
      onHide={mobileFilterHandler}
      placement="end"
      {...props}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filter</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>{children}</Offcanvas.Body>
    </Offcanvas>
  );
}
