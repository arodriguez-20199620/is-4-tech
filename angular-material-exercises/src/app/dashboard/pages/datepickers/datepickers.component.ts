import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MMM DD, YYYY',
  },
  display: {
    dateInput: 'MMM DD, YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-datepickers',
  templateUrl: './datepickers.component.html',
  standalone: true,
  providers: [
    provideMomentDateAdapter(MY_FORMATS), DatePipe
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DatepickersComponent implements OnDestroy {

  readonly date = new FormControl(moment());

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  private readonly year = new Date().getFullYear();
  readonly minDate = new Date(this.year - 1, 0, 1);
  readonly maxDate = new Date();

  selectedDate: Date | null = null;

  constructor(private datePipe: DatePipe) {
  }

  ngOnDestroy(): void {
    console.log('DatepickersComponent destroyed');
  }

  get formattedRange() {
    const start = this.range.value.start;
    const end = this.range.value.end;
    return {
      start: start ? this.datePipe.transform(start, 'MM/dd/yyyy') : 'No start date',
      end: end ? this.datePipe.transform(end, 'MM/dd/yyyy') : 'No end date'
    };
  }


  onDateChange(event: any) {
    const date = event.value;
    if (date) {
      this.selectedDate = new Date(date.getFullYear(), date.getMonth());
    }
  }
}
