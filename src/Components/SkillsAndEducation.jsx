import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
function SkillsEducation() {
  return (
    <div>
      <p className="mt-3 font-serif">Education</p>
      <hr className=""/>
      <div className="mt-3">
      <Form.List name="education" >
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "qualification"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Qualification"  className="rounded-lg shadow-md"/>
                  </Form.Item>
                  </div>

                  <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "percentage"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Percentage" className="rounded-lg shadow-md"/>
                  </Form.Item>
                  </div>

                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "institution"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Institution"  className="rounded-lg shadow-md"/>
                  </Form.Item>
                  </div>
                  <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Year Range" className="rounded-lg shadow-md" />
                  </Form.Item>
                  </div>
                  <div className="col-md-2">
                  <MinusCircleOutlined style={{fontSize:25 , color:'tomato'}} onClick={() => remove(name)} />
                  </div>
                 </>
              ))}
            </div>

            <Form.Item className="font-serif">
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                className="bg-white  text-black "
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      </div>
      
      <p className="mt-3 font-serif">Skills</p>
      <hr />
      <div className="mt-3"><Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                  <Form.Item
                    {...restField}
                    name={[name, "technology"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Technology" className="rounded-lg shadow-md" />
                  </Form.Item>
                  </div>

                  <div className="col-md-4  ">
                  <Form.Item
                    {...restField}
                    name={[name, "rating"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="Rating" className="rounded-lg shadow-md" />
                  </Form.Item>
                  </div>

                 
                  <div className="col-md-2">
                  <MinusCircleOutlined style={{fontSize:25 , color:'tomato'}} onClick={() => remove(name)} />
                  </div>
                 </>
              ))}
            </div>

            <Form.Item >
              <Button
                type="dashed"
                className="bg-white  text-black "
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skill
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List></div>
      
    </div>
  );
}

export default SkillsEducation;