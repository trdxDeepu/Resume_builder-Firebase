import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
const { TextArea } = Input;
function ExperienceProjects() {
  return (
    <div>
      <p className="mt-3 font-serif"> Experience </p>
      <hr />
      <div className="mt-3">
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Company"  className="rounded-lg shadow-md" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "years"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Years"  className="rounded-lg shadow-md" />
                    </Form.Item>
                  </div>

                  <div className="col-md-3">
                    <Form.Item
                      {...restField}
                      name={[name, "place"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Place"  className="rounded-lg shadow-md"/>
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Year Range"  className="rounded-lg shadow-md"/>
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      </div>
     

    <p className="mt-3 font-serif">Projects</p>
      <hr />
      <div className="mt-3">
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "title"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Title"  className="rounded-lg shadow-md" />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <TextArea placeholder="Description"  className="rounded-lg shadow-md" />
                    </Form.Item>
                  </div>
                  <div className="col-md-2">
                    <Form.Item
                      {...restField}
                      name={[name, "range"]}
                      rules={[
                        { required: true, message: "Missing first name" },
                      ]}
                    >
                      <Input placeholder="Year Range"  className="rounded-lg shadow-md" />
                    </Form.Item>
                  </div>

                  <div className="col-md-2">
                    <MinusCircleOutlined
                      style={{ fontSize: 25, color: "tomato" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Project
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      </div>
      
    </div>
  );
}

export default ExperienceProjects;
