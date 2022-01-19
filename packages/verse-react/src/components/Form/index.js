import { Wrapper } from '../Wrapper';
import { Checkbox } from './Checkbox';
import { Datepicker } from './Datepicker';
import { Form } from './Form';
import { Input } from './Input';
import { Label } from './Label';
import { RadioGroup } from './RadioGroup';
import { Radio } from './RadioGroup/Radio';
import { Select } from './Select';
import { TextArea } from './TextArea';

Form.Label = Label;
Form.Input = Input;
Form.Select = Select;
Form.TextArea = TextArea;
Form.Datepicker = Datepicker;
Form.Checkbox = Checkbox;
Form.RadioGroup = RadioGroup;
Form.Radio = Radio;
Form.Wrapper = Wrapper;

export { Form };
