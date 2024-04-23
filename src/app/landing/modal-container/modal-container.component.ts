import {Component, OnDestroy} from '@angular/core';
import {Subject, takeUntil} from "rxjs";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BodyPartsComponent} from "../body-parts/body-parts.component";
import {HeadComponent} from "../body-parts/head/head.component";
import {HandComponent} from "../body-parts/hand/hand.component";
import {FootComponent} from "../body-parts/foot/foot.component";
import {PartParams} from "../../models/part-params.model";

@Component({
  selector: 'app-modal-container',
  standalone: true,
  imports: [],
  template: '',
})
export class ModalContainerComponent implements OnDestroy {
  destroy = new Subject<void>();
  currentDialog:  NgbModalRef| undefined = undefined;

  constructor(
    private modalService: NgbModal,
    route: ActivatedRoute,
    router: Router
  ) {

    console.log('ModalContainerComponent');


      route.params.pipe(takeUntil(this.destroy)).subscribe((params: Params) => {
      console.log('params', params);
      const PartParams = params as PartParams;
      this.currentDialog?.close()
      switch (PartParams.part) {
          case 'main':
            this.currentDialog = this.modalService.open(BodyPartsComponent, {centered: true});
            break;
          case 'head':
            this.currentDialog = this.modalService.open(HeadComponent, {centered: true});
            break;
          case 'hand':
             this.currentDialog = this.modalService.open(HandComponent, {centered: true});
            break;
          case 'foot':
            this.currentDialog = this.modalService.open(FootComponent, {centered: true});
            break;
          default:
            this.currentDialog = this.modalService.open(BodyPartsComponent, {centered: true});
            break;
      }
      // When router navigates on this component is takes the params and opens up the photo detail modal
    //  this.currentDialog = this.modalService.open(BodyPartsComponent, {centered: true});
      //this.currentDialog.componentInstance.photo = params.id;

      // Go back to home page after the modal is closed
      this.currentDialog.result.then(_ => {
        router.navigateByUrl('/');
      }, _ => {
        router.navigateByUrl('/');
      });

    });
  }

  ngOnDestroy() {
    this.destroy.next();
  }
}


