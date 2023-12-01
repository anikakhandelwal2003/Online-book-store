import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";



interface IProps {
    label?: string;
    type: string;
    className?: string;
    placeHolder?: string;
    name: string;
    value?: string | number;
    control: Control;
    error?: FieldErrors;
    disabled?: boolean;
    readOnly?: boolean;
    required?: true;
   width?:string

}

const CommonTextBox: React.FC<IProps> = (props) => {
    const {
        label,
        type,
        className = "form-control",
        placeHolder,
        name,
        control,
        error,
        disabled = false,
        required,
        
    } = props;
    return (
        <>
            {label && (
                <label htmlFor={name} style={{
                
                    marginBottom:"20px",
                }}>
                    {label}
                    {required ? <sup className="colorRed">*</sup>: null}
                </label>
            )}


            <div
                className="form-relative"

            >
                <Controller
                    render={({ field }) => (
                        <input style={{width:"75%",height:"30px"}}
                            {...field}
                            type={type}
                            disabled={disabled}
                            // readOnly={readOnly}
                            className={className}
                            placeholder={placeHolder}
                            id={name}
                        
                        />
                    )}
                    name={name}
                    control={control}
                />
            </div>
            {/* / Common Error message component  / */}

            {error && error[name]?.message }
            

        </>
    );
};

export default React.memo(CommonTextBox);
