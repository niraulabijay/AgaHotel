import React from 'react'
import '../assets/css/roomselector.css'
import { FieldArray, Field } from 'formik'
import $ from 'jquery'

const RoomSelector = ({
    form: {values, setFieldValue}
}) => {
    console.log(values)
    $(".option-content").focusout(function () {
        $(this).removeClass('active');
    });
    const checkFocusOut = () =>{

        $(".option-content").focusout(function () {
        
            $(this).removeClass('active');
        });
    }
    const handleAdult = (index, inc) => {
        let newOccupancy = values.occupancy
        if(inc){
            newOccupancy[index].adult += 1;
        }else{
            newOccupancy[index].adult -= 1;
        }
        setFieldValue('occupancy',newOccupancy);
        checkFocusOut();

    }
    const handleChild = (index, inc) => {
        let newOccupancy = values.occupancy
        if(inc){
            newOccupancy[index].child += 1;
        }else{
            newOccupancy[index].child -= 1;
        }
        setFieldValue('occupancy',newOccupancy);
        checkFocusOut();
    }
   
    return(
        <div tabIndex="0" className="option-content">
        
        <FieldArray name="occupancy"> 
        {(arrayHelpers) => (
                <>
		<div className="header">
			<div className="row room-content">
				<div className="col-6">
					<div className="room">
						rooms
					</div>
					
				</div>	
				<div className="col-6">
					<div className="number">
						<div>
                            {values.occupancy.length > 1 &&
							<i id="minus" className="fas fa-minus-circle" onClick={()=>
                                arrayHelpers.pop({
                                    adult: 1,
                                    child: 0,
                                    id: "" + Math.random()
                                })
                            }></i>
                            }
						</div>
						<div>
							{values.occupancy.length}
						</div>
						<div>
							<i id="plus" className="fas fa-plus-circle" onClick={()=>
                                arrayHelpers.push({
                                    adult: 1,
                                    child: 0,
                                    id: "" + Math.random()
                                })
                            }></i>
						</div>
					</div>
				
				</div>
			</div>
		</div>

            
        {values.occupancy.map((room, index) =>{
                    return(
                <div className="room-occupancy" key={room.id}>
                <div className="sub-header">
                    room {`0${index+1}`}
                </div>
                <div className="row room-content">
                    <div className="col-6">
                        <div className="number">
                            <div>
                                <i id="minus" className="fas fa-minus-circle" onClick={()=> handleAdult(index, 0)}></i>
                            </div>
                            <div>
                                {/* <Field name={`room.${index}.adult`} type="hidden" /> */}
                                { room.adult }
                            </div>
                            <div>
                                <i id="plus" className="fas fa-plus-circle" onClick={()=> handleAdult(index, 1)}></i>
                            </div>
                        </div>
                        <span>
                            adult
                        </span>
                        
                    </div>
                    <div className="col-6">
                        <div className="number">
                            <div>
                                <i id="minus"  className="fas fa-minus-circle" onClick={()=> handleChild(index, 0)}></i>
                            </div>
                            <div>
                                {room.child}
                            </div>
                            <div>
                                <i id="plus"  className="fas fa-plus-circle" onClick={()=> handleChild(index, 1)}></i>
                            </div>
                        </div>
                        <span>
                            children
                        </span>
                    
                    </div>
                </div>
            </div> 
                    )})

                    }
                    </>
                )
                
                }
            </FieldArray>
        
        </div>	
    )
}

export default RoomSelector

		
	