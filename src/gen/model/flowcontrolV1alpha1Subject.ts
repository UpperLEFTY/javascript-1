/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.20.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1alpha1GroupSubject } from './v1alpha1GroupSubject';
import { V1alpha1ServiceAccountSubject } from './v1alpha1ServiceAccountSubject';
import { V1alpha1UserSubject } from './v1alpha1UserSubject';

/**
* Subject matches the originator of a request, as identified by the request authentication system. There are three ways of matching an originator; by user, group, or service account.
*/
export class FlowcontrolV1alpha1Subject {
    'group'?: V1alpha1GroupSubject;
    /**
    * Required
    */
    'kind': string;
    'serviceAccount'?: V1alpha1ServiceAccountSubject;
    'user'?: V1alpha1UserSubject;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "group",
            "baseName": "group",
            "type": "V1alpha1GroupSubject"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "serviceAccount",
            "baseName": "serviceAccount",
            "type": "V1alpha1ServiceAccountSubject"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "V1alpha1UserSubject"
        }    ];

    static getAttributeTypeMap() {
        return FlowcontrolV1alpha1Subject.attributeTypeMap;
    }
}

