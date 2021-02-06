import { Form, Select, InputNumber, Switch, Slider, Button, Typography } from 'antd';
import { SmileFilled } from '@ant-design/icons';
import Link from 'next/link';

import DocumentationPage from '@/components/layout/documentation-page';

const { Title } = Typography;

const FormItem = Form.Item;
const { Option } = Select;

export default function Page() {
  return (
    <DocumentationPage>
      <div style={{ marginTop: '100px' }}>
        <div className="text-center mb-5">
          <Link href="/">
            <a>
              <Title>
                title
                <SmileFilled size={48} strokeWidth={1} />
              </Title>
            </a>
          </Link>
          <Typography.Paragraph>Welcome to the world !</Typography.Paragraph>
        </div>
        <div>
          <Form layout="horizontal">
            <FormItem label="Input Number" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <InputNumber
                size="large"
                min={1}
                max={10}
                style={{ width: 100 }}
                defaultValue={3}
                name="inputNumber"
              />
            </FormItem>

            <FormItem label="Switch" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Switch defaultChecked name="switch" />
            </FormItem>

            <FormItem label="Slider" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Slider defaultValue={70} />
            </FormItem>

            <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
              <Select size="large" defaultValue="lucy" style={{ width: 192 }} name="select">
                <Option value="jack">jack</Option>
                <Option value="lucy">lucy</Option>
                <Option value="disabled" disabled>
                  disabled
                </Option>
                <Option value="yiminghe">yiminghe</Option>
              </Select>
            </FormItem>

            <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
              <Button size="large" type="primary" htmlType="submit">
                OK
              </Button>
              <Button size="large" style={{ marginLeft: 8 }}>
                Cancel
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    </DocumentationPage>
  );
}
