
## **Milestone 35 - Deployment on AWS**

### **Overview**

Milestone 35 focuses on deploying the application to Amazon Web Services (AWS), leveraging AWS's cloud infrastructure to host and manage the application. This milestone covers the necessary steps to configure and deploy your application on AWS.

### **Topics Covered in Milestone 35**

- **Deployment on AWS**: Configured and deployed the application using AWS services, ensuring it is properly set up and accessible online.
- **Environment Configuration**: Set up necessary environment variables and configurations required for deployment on AWS.

### **Deployment Steps**

To deploy the application on AWS:

1. **Prepare Your Application**

   - Ensure that all code is committed to your version control system (e.g., Git).
   - Update the `package.json` file to include any necessary build scripts or deployment commands.

2. **Set Up an AWS Account**

   - Sign up or log in to your AWS account at [AWS](https://aws.amazon.com/).

3. **Choose AWS Services**

   Depending on your application requirements, choose the appropriate AWS services for deployment:

   - **Amazon EC2**: For deploying a web server or application server.
   - **Amazon S3**: For static file hosting (e.g., frontend assets).
   - **Amazon RDS**: For managed database services.
   - **Amazon Elastic Beanstalk**: For simplified deployment of web applications.

4. **Create and Configure AWS Resources**

   - **EC2 Instance**:
     - Launch a new EC2 instance from the AWS Management Console.
     - Configure security groups, key pairs, and instance settings.
     - SSH into the instance and set up your application environment.

   - **S3 Bucket**:
     - Create an S3 bucket for storing static assets.
     - Configure bucket policies and permissions.

   - **RDS Instance**:
     - Launch a new RDS instance if your application requires a managed database.
     - Configure database settings and security groups.

   - **Elastic Beanstalk**:
     - Create a new Elastic Beanstalk environment.
     - Upload your application code and configure environment settings.

5. **Deploy Your Application**

   - **EC2 Instance**:
     - Transfer your application code to the EC2 instance using SCP or a similar tool.
     - Install dependencies and start your application.

   - **S3 Bucket**:
     - Upload static assets to the S3 bucket.

   - **Elastic Beanstalk**:
     - Use the Elastic Beanstalk CLI or AWS Management Console to deploy your application.

6. **Configure Domain and SSL**

   - Set up Route 53 for domain management and DNS configuration.
   - Use AWS Certificate Manager (ACM) to configure SSL certificates for secure connections.

7. **Monitor and Manage Your Deployment**

   - Use AWS CloudWatch to monitor application performance and logs.
   - Access your deployed application using the provided URL or custom domain.

### **Post-Deployment Checks**

- **Verify Functionality**: Test the application to ensure that all features are working correctly after deployment.
- **Check Logs**: Review application logs and CloudWatch metrics for any errors or issues that may need addressing.
